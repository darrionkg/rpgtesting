export function someFunction(input) {
  return input;
}

export function setBrowserVariable(name, value)
{
  localStorage.setItem(name, value);
}

export function getBrowserVariable(name)
{
  return localStorage.getItem(name);
}