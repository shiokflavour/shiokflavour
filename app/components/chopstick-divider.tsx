export default function ChopstickDivider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 0' }}>
      <svg
        width="100"
        height="28"
        viewBox="0 0 100 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.22 }}
      >
        {/* Left chopstick - angled slightly outward, thicker at bottom, thin at top */}
        <line x1="38" y1="26" x2="28" y2="2" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="38" y1="26" x2="28" y2="2" stroke="#f97316" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>

        {/* Right chopstick - angled slightly outward */}
        <line x1="62" y1="26" x2="72" y2="2" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="62" y1="26" x2="72" y2="2" stroke="#f97316" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>

        {/* Small dot in centre where they would rest */}
        <circle cx="50" cy="24" r="1.5" fill="#f97316" opacity="0.5"/>
      </svg>
    </div>
  );
}
