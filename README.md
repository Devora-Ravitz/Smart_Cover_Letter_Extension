# **Smart Cover Letter Extension**

**Smart Cover Letter Extension** is a Chrome extension that generates personalized cover letters from job descriptions. Highlight the job description, send it to the extension, and in seconds, get a ready-to-download cover letter in Word or PDF format.

## **Requirements**
- **OpenAI API Key**: You need to create a personal ChatGPT API key from [OpenAI](https://beta.openai.com/signup/).

## **Setup Instructions**

### **Step 1: Download the Project**
Clone or download the project to your local machine:
```bash
git clone https://github.com/Devora-Ravitz/Smart_Cover_Letter_Extension.git
```

### **Step 2: Create an API Key**
1. Go to [OpenAI](https://beta.openai.com/signup/) and create an account.
2. Generate your API key and copy it.

### **Step 3: Update the API Key**
1. Open the `popup.js` file in a code editor.
2. Replace the placeholder `apiKey` value with your own key:
    ```javascript
    const apiKey = 'your_openai_api_key_here';
    ```

### **Step 4: Install the Extension**
1. Open Google Chrome.
2. Go to `chrome://extensions/` or click the three dots (top-right corner) → **More Tools** → **Extensions**.
3. Enable **Developer Mode** (top-right corner).
4. Click on **Load unpacked** and select the folder where you saved the project files.

### **Step 5: Using the Extension**
1. After installing, the extension will appear in the Chrome toolbar.
2. Pin the extension for quick access.
3. Highlight the job description on any website, click the extension, and generate your personalized cover letter.

### **Step 6: Download the Cover Letter**
You can download the generated cover letter in Word or PDF format or edit it directly within the extension.

![image (19)](https://github.com/user-attachments/assets/e680221a-ddbe-4d29-80c6-ccfa8b6f260f)


