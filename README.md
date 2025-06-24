# ITK Dev Frontend Theme for Drupal

## Create a custom theme from the starterkit

Replace THEMENAME and "THEME READABLE NAME" with appropriate values.
The theme must be placed in themes/custom for references to base theme to work.

```shell name"build-custom-theme"
docker compose run --rm phpfpm php /app/web/core/scripts/drupal generate-theme THEMENAME --name="THEME READABLE NAME" --path="themes/custom" --starterkit=starterkit_project_theme
```

Follow the readme in the created custom theme for further setup.