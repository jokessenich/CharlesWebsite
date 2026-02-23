import os
import re

# Read the shared CSS
with open('css/style.css', 'r') as f:
    shared_css = f.read()

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for fname in html_files:
    with open(fname, 'r') as f:
        html = f.read()
    
    # Replace the <link rel="stylesheet" href="css/style.css"> with inline <style>
    # Keep the link but also inject the CSS inline as a fallback
    if '<link rel="stylesheet" href="css/style.css">' in html:
        replacement = f'<link rel="stylesheet" href="css/style.css">\n<style>\n{shared_css}\n</style>'
        html = html.replace('<link rel="stylesheet" href="css/style.css">', replacement)
    
    with open(fname, 'w') as f:
        f.write(html)
    
    print(f"  ✓ {fname}")

print("Done! CSS inlined into all pages.")
