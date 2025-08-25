# DOM-004: Live Word Counter

A simple project that counts the number of words typed in a <textarea>. The counter updates live and prevents users from typing more than 50 words.

**Technologies Used**:
- HTML <textarea> and <p> for UI
- JavaScript DOM manipulation (`trim`, `split`, `filter`, `join`)
- Input event handling with `addEventListener`

**How It Works**:
1. User types into the textarea.
2. JavaScript splits the text into words (ignores extra spaces).
3. The counter updates in real time: Words typed: X / 50.
4. If the input exceeds 50 words, the text is trimmed back to the first 50.