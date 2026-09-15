# Parts and photos

## Multiple categories

Use `"categories": ["engine", "electrical"]` in a part entry. Each label appears on the card and detail page, and either filter finds the part. Custom category names are supported.

Existing `"category": "brakes"` entries still work, as do arrays such as `"category": ["engine", "electrical"]`. If both fields exist, `categories` takes precedence. Names are trimmed, lowercased, and deduplicated.

## Parts wanted

Edit `src/_data/wanted.json`. Replace the empty `[]` with entries like this:

```json
[
  {
    "name": "Name of the part you need",
    "description": "Model, year, or other details.",
    "budget": "Open to offers"
  }
]
```

`budget` and `description` are optional. Separate multiple entries with commas. These appear on the main page under Parts wanted.

## Parts for sale

Edit all listings in `src/_data/parts.json`.

- `price`: the asking price, e.g. `$500 CAD`, or `Price on request`.
- `status`: the text shown after **Sale:** on cards and part pages. Use `available`, `pending`, `sold`, `not for sale`, `sold as set`, or your own wording. Use an empty string to hide the label.
- Exact lowercase `sold` dims the listing and hides its inquiry button. Exact lowercase `not for sale` also hides its inquiry button. `sold as set` keeps inquiries enabled because it describes how the items are offered.
- `condition` is no longer displayed or searched. Put condition information in `description`; you can remove the old `condition` field.
- `images`: filenames in display order; the first image is the cover.

Store photos in `src/parts/<id>/images/`, matching the listing's `id`. Filenames and capitalization must match the JSON exactly.

Example sale fields:

```json
"price": "$500 CAD",
"status": "pending"
```

This displays the price and **Sale: pending** separately. Changing the price to `pending` does not change the sale status.

Save, run `npm run build` (or use `npm start` for a live preview), and commit the source files and photos. Do not edit `_site` directly.
