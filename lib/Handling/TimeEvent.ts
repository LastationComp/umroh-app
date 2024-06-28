"use client";

export function startTicker(func: () => void, tick: number = 1000) {
  return setInterval(() => {
    func();
  }, tick);
}
