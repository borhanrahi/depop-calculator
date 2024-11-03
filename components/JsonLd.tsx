"use client";

type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  // Create a stable version of the data by sorting keys
  const stableData = JSON.parse(JSON.stringify(data, Object.keys(data).sort()));
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(stableData, null, 2) }}
    />
  );
}
