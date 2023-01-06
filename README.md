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
  uses: Synqrinus/action-md-to-html@v1.3
  with:
    text: '# Hello there'

- name: Use converted html
  run: |
    echo ${{ steps.md-to-html.outputs.html }} > index.html
    cat index.html
