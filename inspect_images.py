from PIL import Image
from pathlib import Path

folder = Path(r'c:/projects/cosmasautos/apps/web/app/public/images/vehicles')
files = sorted(folder.glob('IMG-*.jpg'))

for p in files[:3]:
    img = Image.open(p)
    print('---', p.name, '---')
    print('size', img.size)
    print('info', img.info)
    exif = img.getexif()
    print('exif_items', list(exif.items())[:10])
    print()
