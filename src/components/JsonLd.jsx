const JsonLd = ({ data }) => {
  if (!data) return null;
  const items = Array.isArray(data) ? data.filter(Boolean) : [data];
  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
};

export default JsonLd;
