# 🎂 Multi-Screen Birthday Website for My Girlfriend 💖

A beautiful, interactive birthday website built with HTML, CSS, and JavaScript featuring a cute pink theme and chibi/doodle style design with **4 interactive screens** and **password protection**.

## ✨ Features

### 🔐 **Screen 1: Password Protection**

- **4-Digit Password Entry**: Enter your girlfriend's birthday (MMDD format)
- **Interactive Number Pad**: Beautiful animated buttons with hover effects
- **Visual Feedback**: Dots fill up as you type, error messages for wrong passwords
- **Auto-Validation**: Automatically checks password when 4 digits are entered

### 🎉 **Screen 2: Congratulations**

- **Success Animation**: Beautiful celebration with bouncing checkmark
- **Birthday Message**: Congratulates her for getting the password right
- **Gift Announcement**: Teases the special gift waiting for her
- **Smooth Transition**: Elegant animation to the next screen

### 📸 **Screen 3: Interactive Photo Album**

- **Photo Navigation**: Previous/Next buttons to browse through images
- **Thumbnail Navigation**: Quick jump to any photo (1-4)
- **View All Modal**: See all photos at once in a beautiful grid
- **Image Placeholders**: Shows cute placeholders if images aren't added yet
- **Responsive Design**: Works perfectly on all devices

### 💌 **Screen 4: Final Love Message**

- **Personal Message**: Your heartfelt birthday wishes and love declaration
- **Love Meter**: Animated love level indicator (100% filled)
- **Animated Hearts**: Beautiful floating hearts with different timing
- **Restart Option**: Start over to experience the magic again

### 🎨 **Visual Design**

- **Cute Pink Theme**: Beautiful gradient backgrounds with soft pink colors
- **Chibi/Doodle Style**: Playful fonts and adorable emoji decorations
- **Floating Hearts**: Animated hearts floating in the background
- **Responsive Design**: Works perfectly on all devices

### 🎮 **Interactive Elements**

- **Password System**: Secure 4-digit entry with visual feedback
- **Screen Transitions**: Smooth animations between all screens
- **Photo Album**: Navigate through your special memories together
- **Hover Effects**: Interactive elements respond to your touch
- **Success Animations**: Celebratory effects for correct actions

### 🎉 **Special Effects**

- **Confetti Animation**: Falls from the top on page load
- **Screen Animations**: Elements fade in beautifully as screens load
- **Button Animations**: Interactive feedback on all buttons
- **Success Messages**: Beautiful notifications for actions

### 🥚 **Hidden Easter Eggs**

- **Click Counter**: Click 15 times anywhere to find an Easter egg
- **Hidden Animations**: Various secret interactions throughout

## 🚀 How to Use

### 1. **Set the Password**

Edit `script.js` and change this line:

```javascript
const CORRECT_PASSWORD = "1234"; // Change to your girlfriend's birthday (MMDD format)
```

For example, if her birthday is March 15th, use `'0315'`

### 2. **Add Your Photos**

1. Place your photos in the `images/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
3. If photos aren't added, cute placeholders will show automatically

### 3. **Customize Messages**

Edit the HTML file to personalize:

- Password screen title and subtitle
- Congratulations messages
- Album titles and descriptions
- Final love message content

### 4. **Open the Website**

Simply open `index.html` in any modern web browser and start the magical journey!

## 🎨 Customization

### **Changing the Password**

The password is set in `script.js`:

```javascript
const CORRECT_PASSWORD = "MMDD"; // Month and Day format
```

### **Adding More Photos**

1. Add more images to the `images/` folder
2. Update the `totalImages` variable in `script.js`
3. Add more navigation buttons in the HTML

### **Customizing Colors**

Edit `styles.css` to modify the color scheme:

- Main pink: `#f2c2cf`
- Dark pink: `#d88ba3`
- Light pink: `#e8a5b8`
- Very light pink: `#fdf2f5`

### **Personalizing Messages**

Edit the HTML content in each screen:

- Password screen: Change title and subtitle
- Congratulations: Modify success messages
- Album: Update titles and descriptions
- Final screen: Write your own love message

## 🌟 Technical Details

- **HTML5**: Semantic structure with modern elements
- **CSS3**: Advanced animations, gradients, and responsive design
- **JavaScript ES6+**: Interactive features and dynamic content
- **Fonts**: Google Fonts (Roboto) with system fallbacks - Excellent Vietnamese language support and Safari compatibility
- **Emojis**: Unicode emojis for cute decorations
- **Responsive**: Mobile-first design approach
- **Multi-Screen**: Smooth transitions between different views

## 💝 Perfect For

- **Birthday celebrations** with a surprise element
- **Anniversary surprises** with personal memories
- **Valentine's Day gifts** with love messages
- **Any special romantic occasion**
- **Long-distance relationship surprises**
- **Creating memorable digital experiences**

## 🔧 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Mobile Experience

The website is fully responsive and provides an excellent experience on:

- Smartphones
- Tablets
- Desktop computers
- All screen sizes

## 🎊 Getting Started

1. **Download all files** to a folder
2. **Set the password** to your girlfriend's birthday in `script.js`
3. **Add your photos** to the `images/` folder
4. **Customize messages** in the HTML file
5. **Open `index.html`** in your web browser
6. **Share with your girlfriend** for a magical birthday surprise!

## 🔐 Password Security

The password system is designed to be:

- **User-friendly**: Easy to enter with visual feedback
- **Secure**: 4-digit combination prevents accidental access
- **Personal**: Uses her birthday for easy remembrance
- **Forgiving**: Clear error messages and easy retry

## 📸 Photo Album Features

The interactive album includes:

- **Navigation controls**: Previous, Next, and direct access buttons
- **Image counter**: Shows current position (e.g., "2 / 4")
- **View all option**: See all photos in a beautiful grid
- **Responsive images**: Automatically adjusts to screen size
- **Placeholder system**: Shows cute messages if images aren't added

## 💕 Made with Love

This website was created with lots of love and care to make your girlfriend's birthday extra special. Every screen has been designed to create a magical, romantic experience that she'll never forget!

The multi-screen structure adds an element of surprise and discovery, making the experience more engaging and memorable. Each screen reveals something new and special, building up to your final love message.

---

**Happy Birthday to your amazing girlfriend! 🎂💖✨**

**May this website bring joy, love, and beautiful memories to your special day! 💕**
