import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    const savedUsers = JSON.parse(localStorage.getItem('usersData')) || [];

    return {
      formData: {
        fullName: '',
        birthDate: '',
        phone: '',
        email: ''
      },
      usersData: savedUsers
    };
  },

  actions: {
    saveData() {
      const newUserData = {
        ...this.formData
      };

      // Добавляем нового пользователя в массив
      this.usersData.push(newUserData);

      // Сохраняем массив в localStorage
      localStorage.setItem('usersData', JSON.stringify(this.usersData));
    },

    // Очищаем текущие данные формы (не удаляя данные из localStorage)
    clearData() {
      this.formData = {
        fullName: '',
        birthDate: '',
        phone: '',
        email: ''
      };
    },

    // Удаляем все данные о пользователях (если нужно)
    deleteData() {
      localStorage.removeItem('usersData');
      this.usersData = []; // Очистка массива
    }
  },
});
