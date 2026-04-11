export default function ChopstickDivider() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '56px 0',
      opacity: 0.25
    }}>
      <img
        src="/images/SF_chopstick_transparent.png"
        alt=""
        style={{
          width: 'min(240px, 40vw)',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}
