"use client";

import { useEffect, useRef } from "react";

interface MDXContentProps {
  html: string;
}

export function MDXContent({ html }: MDXContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Enhance code blocks
    container.querySelectorAll<HTMLPreElement>(
      "pre:has(> code[class*='language-'])",
    ).forEach((pre) => {
      if (pre.dataset.enhanced) return;
      pre.dataset.enhanced = "1";

      const wrapper = document.createElement("div");
      wrapper.className = "group mb-4 mt-6 code-block-wrapper";

      const code = pre.querySelector("code");
      const lang = code?.className.match(/language-(\w+)/)?.[1] || "text";

      const header = document.createElement("div");
      header.className = "code-block-header";

      const langLabel = document.createElement("span");
      langLabel.className = "code-block-lang";
      langLabel.textContent = lang;

      const copyBtn = document.createElement("button");
      copyBtn.className = "code-block-copy-btn";
      copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z"/><path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z"/></svg> Copy`;

      copyBtn.addEventListener("click", async () => {
        const text = code?.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg> Copied`;
        setTimeout(() => {
          copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z"/><path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z"/></svg> Copy`;
        }, 2000);
      });

      header.appendChild(langLabel);
      header.appendChild(copyBtn);

      pre.classList.remove("rounded-xl", "border");
      pre.classList.add("overflow-x-auto", "rounded-b-xl", "rounded-t-none", "border", "py-4", "text-sm");

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });

    // Enhance images with click-to-zoom
    container.querySelectorAll<HTMLImageElement>("img.mdx-image").forEach((img) => {
      if (img.dataset.enhanced) return;
      img.dataset.enhanced = "1";

      img.style.cursor = "zoom-in";
      img.style.transition = "transform 0.3s, box-shadow 0.3s";

      img.addEventListener("click", () => {
        const isZoomed = img.dataset.zoomed === "true";
        if (isZoomed) {
          img.style.transform = "scale(1)";
          img.style.boxShadow = "none";
          img.style.cursor = "zoom-in";
          img.dataset.zoomed = "false";
        } else {
          img.style.transform = "scale(1.8)";
          img.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.5)";
          img.style.cursor = "zoom-out";
          img.style.position = "relative";
          img.style.zIndex = "10";
          img.dataset.zoomed = "true";
        }
      });
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
