/* Sibling stagger for scroll reveals - the design steps them 80ms apart,
   capped at six so long lists do not trail far behind the viewport. */
const stagger = (index) => Math.min(index, 6) * 0.08;

export default stagger;
