import React from 'react';

export default function LanguageIcon({ language, cardIcon }) {

  return (
    <span
      className="text-5xl"
      style={{
        color: language.color,
      }}
    >
      {language.icon}
    </span>
  );
}
