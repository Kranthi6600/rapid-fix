export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        zIndex: 9999,
        background: "linear-gradient(90deg, transparent, var(--theme-color), transparent)",
        animation: "loadingBar 1s ease-in-out infinite",
      }}
    />
  );
}
