import { EmployeeServices } from '@/sevices/EmployeeServices'
export default {
    namespaced: true,
    state: {
        employeeList: {
            employees: EmployeeServices.getallEmployeeList
        }
    },
    mutations: {

        UPDATE_SELECTED(state, paylord) {
            state.employeeList.employees = state.employeeList.employees.map(employee => {
                if (employee.id === paylord.empId) {
                    return {...employee, isSelected: !employee.isSelected };
                } else {
                    return employee;
                }
            })
        }
    },
    actions: {

        changeUpdateSelected({ commit }, paylord) {
            return commit('UPDATE_SELECTED', paylord);
        }

    }

}