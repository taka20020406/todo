const form = document.querySelector('.p_todorist_input');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // ページのリロードを防ぐ
  
    // 各値を取得
    const title = document.getElementById('todo').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    const value = document.createElement('tr');

    value.innerHTML = `
    <td class="title">${title}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    <td>${priority}</td>
    <td><button class="edit-btn">編集</button></td>
    <td><button class="delete-btn">削除</button></td>
    `;
    document.querySelector('.task_list').appendChild(value);

    const deleteBtn = value.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
    value.remove(); // この tr 自体を削除
    });

    const editBtn = value.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
    const newTitle = prompt("新しいイベント名を入力してください：", title);
    if (newTitle !== null && newTitle.trim() !== "") {
        value.querySelector('.title').textContent = newTitle;
    }
    });
});