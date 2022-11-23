import { reactive, html, watch } from 'https://cdn.skypack.dev/@arrow-js/core';
import { input } from './input.js';

const app = document.getElementById('app');

const data = reactive({
  clicks: 0,
  customers: [
    {
      name: 'Henry',
      type: 'development',
    },
    {
      name: 'Pete',
      type: 'HR',
    }
  ],
});

const form = reactive({
  name: '',
  type: '',
});

const addCustomer = () => {
  data.customers.push({ name: form.name, type: form.type });
  form.data = '';
  form.type = '';
};



const template = html`
  <div class="container mx-auto">
    <div class="flex flex-col gap-y-2">
      <h1 class="font-bold text-xl">Hello world</h1>
      <div>
        <button class="btn btn-primary btn-sm" @click="${() => data.clicks++}">${() => data.clicks} clicks</button>
      </div>
    </div>

    <form class="my-8">
    ${input({ label: 'Name', name: 'customer', onChange: (e) => { form.name = e.target.value }})}
    ${input({ label: 'Type', name: 'type', onChange: (e) => { form.type = e.target.value }})}

      <button type="button" class="btn btn-primary mt-4" @click="${() => addCustomer()}">Add</button>
    </form>

    <div class="flex flex-col gap-y-2">
      ${() => data.customers.map(cust => {
        return html`
          <div class="flex flex-col">
            <h2 class="font-bold">${cust.name}</h2>
            <p>${cust.type}</p>
          </div>
        `;
      })}
    </div>
  </div>
`

template(app);
