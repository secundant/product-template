# Publishing libraries to NPM

Publish flow is built on [changesets](https://github.com/changesets/changesets).

:::tip

Template includes GitHub Actions workflow for automated publishing.

You may install [Changeset Bot](https://github.com/apps/changeset-bot) to improve your experience

:::

Changesets can work correctly with a monorepository
and provide full control over the publication of packages,
thanks to atomic manual specification of each change you want to describe.

Probably, it's looks some verbose compared to automatic changelogs, but in practice
it's much more useful to have control and be able to fix anything before it's published.

So, changesets already installed and preconfigured a bit:

- Actual changesets configuration placed in
  [.changeset/config.json](https://github.com/secundant/product-template/tree/main/.changeset/config.json),
  you can see config details in [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/config-file-options.md)
- GitHub Action in [.github/workflows/release.yaml](https://github.com/secundant/product-template/tree/main/.github/workflows/release.yaml)
- `release-version` and `release-publish` scripts in root [package.json](https://github.com/secundant/product-template/tree/main/package.json),
  it used inside GitHub Action, you can cut and inline it there if you want

## Setup

1. Install [changeset bot](https://github.com/apps/changeset-bot) into your repository
2. Add `NPM_TOKEN` secret ([npm access token](https://docs.npmjs.com/creating-and-viewing-access-tokens)) to
   [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization).

   You can see more in [changeset action documentation](https://github.com/changesets/action)

## Workflow

Really very simple:

1. Add changesets
2. Create and merge PR
3. Technical "Version bump" PR will be automatically created,
   it will contain deletions of all changesets and updates of versions and changelogs
4. Merge it technical PR
5. Changed packages will be automatically published

You can add changesets anytime and in any quantity,
[changesets](https://github.com/changesets/changesets) will save them all until packages will be published

```bash title="Add changeset - select packages (one/some), define bumps, add message"
yarn changeset
```

## Recipes

### Pin version

:::note WIP

If you want sync packages version

:::

### Prevent publication

```json title=".changeset/config.json"
{
  "ignore": ["@my-org/foo"]
}
```
