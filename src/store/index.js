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
      usersData: savedUsers,
      userExists: false
    };
  },

  actions: {
    saveData() {
      const newUserData = {
        ...this.formData,
        id: this.usersData.length
      };

      // Проверяем, есть ли такой пользователь с одинаковыми данными
      const isDuplicate = this.usersData.some(user =>
        user.fullName === newUserData.fullName &&
        user.birthDate === newUserData.birthDate &&
        user.phone === newUserData.phone &&
        user.email === newUserData.email
      );

      if (isDuplicate) {
        this.userExists = true;
        return;
      }

      this.userExists = false;
      this.usersData.push(newUserData);

      localStorage.setItem('usersData', JSON.stringify(this.usersData));

      const savedUsersData = JSON.parse(localStorage.getItem('usersData')) || [];
      console.log(savedUsersData);
    },

    clearData() {
      this.formData = {
        fullName: '',
        birthDate: '',
        phone: '',
        email: ''
      };
    },

    deleteData(id) {
      this.usersData = this.usersData.filter(user => user.id !== id);
      this.usersData = this.usersData.map((user, index) => {
        user.id = index;
        return user;
      });

      localStorage.setItem('usersData', JSON.stringify(this.usersData));
    }
  },
});
