import React, { useEffect, useRef, useState } from 'react';
import './Playground.css';

const WIDTH = 900;
const HEIGHT = 220;
const GROUND_Y = HEIGHT - 34;
const GRAVITY = 0.55;
const JUMP_VELOCITY = -11;
const PLAYER_W = 34;
const PLAYER_H = 32;
const PLAYER_X = 60;
const HIGH_SCORE_KEY = 'vl-portfolio-runner-highscore';
// Physics/spawn constants are tuned assuming a 60fps frame; the loop below
// scales every per-frame delta by `dt` (elapsed time / 1000/60) so the game
// feels the same on a 60Hz screen and a 144Hz one.

const freshState = () => ({
  player: { y: GROUND_Y - PLAYER_H, vy: 0 },
  obstacles: [],
  speed: 4,
  score: 0,
  nextSpawnIn: 80,
  ticks: 0,
  status: 'idle',
});

const readColor = (name, fallback) => {
  const el = document.querySelector('.app-wrapper') || document.documentElement;
  const val = getComputedStyle(el).getPropertyValue(name).trim();
  return val || fallback;
};

// Blocky dino silhouette, drawn from rectangles to match the site's grid/mono aesthetic.
const drawDino = (ctx, x, y, color, running, legUp) => {
  ctx.fillStyle = color;
  // tail
  ctx.fillRect(x, y + 16, 8, 6);
  // body
  ctx.fillRect(x + 6, y + 10, 20, 12);
  // neck
  ctx.fillRect(x + 20, y + 4, 6, 8);
  // head
  ctx.fillRect(x + 22, y, 12, 10);
  // small arm
  ctx.fillRect(x + 18, y + 14, 4, 3);
  // legs (alternate for a running feel while grounded)
  if (running) {
    ctx.fillRect(x + 10, y + 22, 5, legUp ? 6 : 9);
    ctx.fillRect(x + 19, y + 22, 5, legUp ? 9 : 6);
  } else {
    ctx.fillRect(x + 10, y + 22, 5, 9);
    ctx.fillRect(x + 19, y + 22, 5, 9);
  }
  // eye (cut-out)
  ctx.fillStyle = readColor('--panel-2', '#171f2a');
  ctx.fillRect(x + 29, y + 3, 2, 2);
};

// Blocky cactus — a stalk, with side arms on wider obstacles for cluster variety.
const drawCactus = (ctx, x, w, h, color) => {
  ctx.fillStyle = color;
  const stalkW = Math.max(6, w * 0.5);
  const stalkX = x + (w - stalkW) / 2;
  const top = GROUND_Y - h;
  ctx.fillRect(stalkX, top, stalkW, h);
  if (w > 17) {
    const armW = Math.max(4, stalkW * 0.6);
    ctx.fillRect(x, top + h * 0.3, armW, h * 0.4);
    ctx.fillRect(x + w - armW, top + h * 0.15, armW, h * 0.4);
  }
};

const Playground = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef(freshState());
  const rafRef = useRef(null);

  const [status, setStatus] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setHighScore(Number(localStorage.getItem(HIGH_SCORE_KEY) || 0));
  }, []);

  const resetGame = () => {
    stateRef.current = { ...freshState(), status: 'running' };
    setStatus('running');
    setScore(0);
  };

  const jump = () => {
    const s = stateRef.current;
    if (s.status === 'idle' || s.status === 'over') {
      resetGame();
      return;
    }
    if (s.status === 'running' && s.player.y >= GROUND_Y - PLAYER_H - 0.5) {
      s.player.vy = JUMP_VELOCITY;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let lastScoreSync = 0;
    let lastTime = null;

    const loop = (t) => {
      const s = stateRef.current;
      const grounded = s.player.y >= GROUND_Y - PLAYER_H - 0.5;

      if (lastTime === null) lastTime = t;
      // Normalize to "60fps frame units" so physics/speed feel identical
      // regardless of the display's actual refresh rate.
      const dt = Math.min(4, (t - lastTime) / (1000 / 60));
      lastTime = t;

      if (s.status === 'running') {
        s.ticks += dt;
        s.speed = Math.min(9.5, 4 + s.score * 0.0006);

        s.player.vy += GRAVITY * dt;
        s.player.y += s.player.vy * dt;
        if (s.player.y > GROUND_Y - PLAYER_H) {
          s.player.y = GROUND_Y - PLAYER_H;
          s.player.vy = 0;
        }

        s.nextSpawnIn -= dt;
        if (s.nextSpawnIn <= 0) {
          const h = 16 + Math.random() * 22;
          s.obstacles.push({ x: WIDTH + 10, w: 12 + Math.random() * 10, h });
          s.nextSpawnIn = Math.max(58, 105 - s.speed * 3 - Math.random() * 15);
        }
        s.obstacles.forEach((o) => { o.x -= s.speed * dt; });
        s.obstacles = s.obstacles.filter((o) => o.x + o.w > -5);

        s.score += s.speed * 0.045 * dt;

        const playerBox = {
          x: PLAYER_X + 8,
          y: s.player.y + 8,
          w: PLAYER_W - 16,
          h: PLAYER_H - 12,
        };
        for (const o of s.obstacles) {
          const stalkW = Math.max(6, o.w * 0.5);
          const obsBox = {
            x: o.x + (o.w - stalkW) / 2,
            y: GROUND_Y - o.h + 2,
            w: stalkW,
            h: o.h - 2,
          };
          const hit =
            playerBox.x < obsBox.x + obsBox.w &&
            playerBox.x + playerBox.w > obsBox.x &&
            playerBox.y < obsBox.y + obsBox.h &&
            playerBox.y + playerBox.h > obsBox.y;
          if (hit) {
            s.status = 'over';
            const rounded = Math.floor(s.score);
            setStatus('over');
            setScore(rounded);
            setHighScore((prevHigh) => {
              if (rounded > prevHigh) {
                localStorage.setItem(HIGH_SCORE_KEY, String(rounded));
                return rounded;
              }
              return prevHigh;
            });
            break;
          }
        }

        if (t - lastScoreSync > 120) {
          lastScoreSync = t;
          setScore(Math.floor(s.score));
        }
      }

      const signal = readColor('--signal', '#ff8a3d');
      const paper = readColor('--paper', '#e9edf2');
      const hairline = readColor('--hairline', '#232c38');
      const muted = readColor('--muted', '#8a97a6');

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = muted;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 0.5);
      ctx.lineTo(WIDTH, GROUND_Y + 0.5);
      ctx.stroke();

      ctx.fillStyle = hairline;
      const tickOffset = (s.ticks * (s.status === 'running' ? s.speed : 0)) % 40;
      for (let x = -tickOffset; x < WIDTH; x += 40) {
        ctx.fillRect(x, GROUND_Y + 7, 16, 2);
      }

      const legUp = Math.floor(s.ticks / 6) % 2 === 0;
      drawDino(ctx, PLAYER_X, s.player.y, signal, s.status === 'running' && grounded, legUp);

      s.obstacles.forEach((o) => drawCactus(ctx, o.x, o.w, o.h, paper));

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="playground-container">
      <span className="section-eyebrow">~/playground</span>
      <h2 className="section-heading">Modo arcade</h2>
      <p className="section-subtitle">
        Um intervalo no meio do currículo. Pule com espaço, seta pra cima ou um toque na tela — e
        tente bater seu recorde.
      </p>

      <div className="playground-panel panel">
        <div className="playground-bar">
          <span className="playground-stat">
            <span className="playground-stat-label">score</span>
            <span className="playground-stat-value">{score}</span>
          </span>
          <span className="playground-stat">
            <span className="playground-stat-label">recorde</span>
            <span className="playground-stat-value playground-stat-value--ok">{highScore}</span>
          </span>
        </div>

        <div className="runner-stage" onClick={jump}>
          <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="runner-canvas" />

          {status !== 'running' && (
            <div className="playground-overlay">
              {status === 'over' ? (
                <>
                  <p className="playground-result">
                    fim de jogo · score {score}
                    {score > 0 && score >= highScore && (
                      <span className="playground-rate"> · novo recorde!</span>
                    )}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => { e.stopPropagation(); jump(); }}
                  >
                    Jogar novamente
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={(e) => { e.stopPropagation(); jump(); }}
                >
                  Começar
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
