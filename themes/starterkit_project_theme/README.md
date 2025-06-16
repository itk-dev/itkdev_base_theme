# starterkit_project_theme for Drupal

This theme is for the project specific styles and templates.
Basic components are provided from the ITK-dev base theme.

## Templates

Add your custom templates and override templates in the `Templates` folder.

## Styling

If you need any custom styling this can be created in the `./assets/css/components/project-styles.css` file.
This will automatically be included when assets are built.

## Images

Place images in the `assets/images` folder.

## Scripts

Place custom scripts in the `./assets/js/components/project-scripts.js` file.

## Common visuals

Images you should consider adding in the theme

- screenshot.png
  Screenshot of the page for presentation in the admin
- favicon.ico
  Classic favicon for the browser
- logo.svg
  Default system branding for the theme

## Usage

Install the node packages

```shell name="install"
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme install
```

Run the command below to build assets once. This includes the base theme styles and js.

```shell name"assets-build"
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme build
```

Run the command below to continuesly build assets upon file changes.

```shell name"assets-watch"
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme watch
```

## Coding standards

Run the commands below to check and apply coding standards

```shell name="coding-standards-assets"
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme install
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme coding-standards-apply
docker compose run --rm node yarn --cwd /app/web/themes/custom/starterkit_project_theme coding-standards-check
```
