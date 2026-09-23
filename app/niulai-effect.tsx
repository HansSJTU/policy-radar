'use client';

/* oxlint-disable next/no-img-element -- The effect deliberately reuses one transparent bitmap in clipped animation layers. */

import { useEffect, useState } from 'react';

const asset = '/animations/niulai-cutout-v5.png';

// The cut-out is only fetched the first time someone triggers the effect, so
// ordinary visits never download it.
export function NiulaiEffect({ triggerToken }: { triggerToken: number }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (triggerToken === 0) return;

    let cancelled = false;
    let resetTimer: number | undefined;
    let clearFrame: number | undefined;
    let startFrame: number | undefined;
    const image = new Image();
    image.src = asset;
    void image
      .decode()
      .catch(() => undefined)
      .then(() => {
        if (cancelled) return;
        setMounted(true);
        clearFrame = window.requestAnimationFrame(() => {
          setActive(false);
          startFrame = window.requestAnimationFrame(() => {
            setActive(true);
            resetTimer = window.setTimeout(() => setActive(false), 2050);
          });
        });
      });

    return () => {
      cancelled = true;
      if (clearFrame !== undefined) window.cancelAnimationFrame(clearFrame);
      if (startFrame !== undefined) window.cancelAnimationFrame(startFrame);
      if (resetTimer !== undefined) window.clearTimeout(resetTimer);
    };
  }, [triggerToken]);

  return mounted ? <NiulaiPuppet active={active} /> : null;
}

export function NiulaiPuppet({ active }: { active: boolean }) {
  return (
    <div
      className={`niulai-puppet${active ? ' active' : ''}`}
      aria-hidden="true"
    >
      <div className="niulai-actor">
        <img className="part body-part" src={asset} alt="" draggable="false" />
        <div className="head-rig">
          <img
            className="part horn-left"
            src={asset}
            alt=""
            draggable="false"
          />
          <img
            className="part horn-right"
            src={asset}
            alt=""
            draggable="false"
          />
          <img className="part ear-left" src={asset} alt="" draggable="false" />
          <img
            className="part ear-right"
            src={asset}
            alt=""
            draggable="false"
          />
          <img
            className="part face-part"
            src={asset}
            alt=""
            draggable="false"
          />
          <div className="mouth-cavity" />
          <img className="part jaw-part" src={asset} alt="" draggable="false" />
          <div className="tear tear-stream left" />
          <div className="tear tear-stream right" />
          <div className="tear tear-drop d1" />
          <div className="tear tear-drop d2" />
          <div className="tear tear-drop d3" />
          <div className="tear tear-drop d4" />
        </div>
      </div>
    </div>
  );
}
