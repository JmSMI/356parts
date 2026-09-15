# Parts and photos

## Reference links on a part

Add an optional `references` array inside any entry in `src/_data/parts.json`:

```json
"references": [
  {
    "label": "Comparable listing — $800 USD asking price",
    "href": "https://example.com/listing",
    "note": "Optional context, such as condition differences or the date checked."
  },
  {
    "label": "Part identification research",
    "href": "https://example.com/research"
  }
]
```

Use full `https://` URLs. Links appear below the description/notes on the part page, in the order entered, and open in a new tab. `note` is optional. Omit `references` or use `"references": []` to hide the section. Keep commas between JSON fields and between reference objects.

Wanted items can include an optional `href` in `src/_data/wanted.json`:

```json
[
  {
    "name": "Parking brake guide tube",
    "href": "https://example.com/part",
    "description": ""
  }
]
```

The site renders the name as `<a href="...">Parking brake guide tube</a>`. Use a full `https://` URL. Leave `href` empty or omit it for plain text. Enter text and URL as separate JSON fields, not raw HTML.

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
