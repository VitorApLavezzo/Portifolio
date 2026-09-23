import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

const VIEWPORT = { once: true, margin: '0px 0px -8% 0px' };

/**
 * Scroll-in reveal shared by every section. `delay` is used to stagger
 * siblings — the design steps them 80ms apart, capped at six.
 */
const Reveal = ({ children, delay = 0, as = 'div', ...rest }) => {
  const Tag = motion[as] ?? motion.div;
  const reduced = useReducedMotion();
  // Quem pede menos animacao ainda ve o conteudo surgir, so que sem deslizar.
  const from = reduced ? { opacity: 0 } : { opacity: 0, y: 28 };
  const to = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <Tag
      initial={from}
      whileInView={to}
      viewport={VIEWPORT}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
