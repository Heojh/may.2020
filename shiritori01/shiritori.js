const body = document.body;

const word = document.createElement('div');
word.textContent = '개발자';
body.append(word);

const inputData = document.createElement('input');
body.append(inputData);

const button = document.createElement('button');
button.textContent = '입력';
body.append(button);

const result = document.createElement('div');
body.append(result);

button.addEventListener('click', function callback() {
    if(word.textContent[word.textContent.length - 1] === inputData.value[0]) {
        result.textContent = '딩동댕'
        word.textContent = inputData.value;
        inputData.value = '';
        inputData.focus();
    } else {
        result.textContent = '땡';
        inputData.value = '';
        inputData.focus();    }
})

