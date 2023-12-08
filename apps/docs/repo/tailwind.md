# Tailwind

We're using [Tailwind CSS](https://tailwindcss.com/) as a CSS framework in all packages by default

Raw Tailwind is a bit verbose for complex projects, so in our projects you could see some great additional tools:

- [cva](https://cva.style/docs) - Variant-based styles

## Additional setup

You need to instruct your IDE how to autocomplete Tailwind classes for `cva`, see https://beta.cva.style/getting-started/installation/#intellisense for more details.

### WebStorm

Go to `Languages and Frameworks | Style Sheets | Tailwind CSS` and add the following configuration:

```text
{
  "experimental": {
    "classRegex": ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  }
}
```

## Not included yet

- [Typewind](https://typewind.vercel.app/)
  - Universal autocomplete everywhere
  - Type-safety and zero runtime overhead
  - Painless [modifiers](https://typewind.vercel.app/docs/usage/modifiers) grouping
