import { html } from 'https://cdn.skypack.dev/@arrow-js/core';

export const input = ({ label, name, onChange }) => {
  return html`
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">${() => label}</span>
      </label>
      <input type="text" name="${() => name}" @input="${onChange}" class="input input-bordered w-full max-w-xs" />
    </div>
  `;
};
