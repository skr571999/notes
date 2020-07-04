import pyqrcode

link = (
    "https://drive.google.com/file/d/1Hn2hlMg0fRMCrjs7chNIfFB_6_MNpGe0/view?usp=sharing"
)

qr = pyqrcode.create(link)

qr.png("myqr.png", scale=8)
# url.svg("myqr.svg", scale=8)
