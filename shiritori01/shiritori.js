const body = document.body;

// 첫 단어.
const word = document.createElement('div');
word.textContent = '개발자';
body.append(word);

// 버튼을 '엔터 키'로 작동 시키기 위해 'form' 생성.
const form = document.createElement('form');
body.append(form);

// 입력 창.
const inputData = document.createElement('input');
// 'form' 안에 들어가 있어야 한다. body.append -> form.append
form.append(inputData);

// 버튼(click).
const button = document.createElement('button');
button.textContent = '입력';
// 'form' 안에 들어가 있어야 한다. body.append -> form.append
form.append(button);

// 결과 창.
const result = document.createElement('div');
body.append(result);

// button -> form / 'click' -> 'submit'
form.addEventListener('submit', function callback(e) {
    // 새로고침 현상 발생. 새로고침이 되지 않게 해주기 위한 코드.
    e.preventDefault();

    if(word.textContent[word.textContent.length - 1] === inputData.value[0]) {
        result.textContent = '딩동댕'
        word.textContent = inputData.value;
        inputData.value = '';
        inputData.focus();
    } else {
        result.textContent = '땡';
        inputData.value = '';
        inputData.focus();
    }
})

