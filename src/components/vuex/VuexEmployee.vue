<template >
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li
                v-for="employee in employees"
                :key="employee.id"
                class="list-group-item list-group-items-success"
              >
                <input
                  type="checkbox"
                  @change="updateSelected(employee.id)"
                  name=""
                  class="form-check-input"
                  id=""
                />
                {{ employee.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="" v-for="employee of employees" :key="employee.id">
          <div class="card my-1" v-if="employee.isSelected">
            <div class="card-body list-group-items-success">
              <ul class="list-group">
                <li class="list-group-item">Id: {{ employee.id }}</li>
                <li class="list-group-item">Id: {{ employee.name }}</li>
                <li class="list-group-item">Id: {{ employee.email }}</li>
                <li class="list-group-item">Id: {{ employee.username }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexEmployee",
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "oilkjghf",
          username: "poikjhgv",
          email: "olkijhg@gmail.com",
          isSelected: false,
        },
        {
          id: 2,
          name: "oilkjghf",
          username: "poikjhgv",
          email: "olkijhg@gmail.com",
          isSelected: false,
        },
        {
          id: 3,
          name: "oilkjghf",
          username: "poikjhgv",
          email: "olkijhg@gmail.com",
          isSelected: false,
        },
        {
          id: 4,
          name: "oilkjghf",
          username: "poikjhgv",
          email: "olkijhg@gmail.com",
          isSelected: false,
        },
        {
          id: 5,
          name: "oilkjghf",
          username: "poikjhgv",
          email: "olkijhg@gmail.com",
          isSelected: false,
        },
      ],
    };
  },

  methods: {
    updateSelected(empid) {
      this.employees = this.employees.map((employee) => {
        if (employee.id === empid) {
          return { ...employee, isSelected: !employee.isSelected };
        } else {
          return employee;
        }
      });
    },
  },
};
</script>