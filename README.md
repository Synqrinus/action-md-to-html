# Markdown to HTML action

This action prints converts a Markdown input to an HTML

## Inputs

### `text`

**Required** The markdown text you want to convert

## Outputs

### `html`

The HTML result

## Example usage

```yaml
- name: Convert markdown text to html
  id: md-to-html
  uses: Synqrinus/action-md-to-html@v1.8
  with:
    title: 'Converted document' # Title for html meta tag
    html: index.html            # Output file
    style: style.css            # File with styles if any
    text: README.md             # MD Text file to convert

