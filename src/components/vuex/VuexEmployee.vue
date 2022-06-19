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
import { EmployeeServices } from "@/services/EmployeeServices";
export default {
  name: "VuexEmployee",
  data() {
    return {
      employees: EmployeeServices,
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