document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    document.getElementById('employeeModal').style.display = 'flex';
});

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('employeeModal').style.display = 'none';
});

document.getElementById('employeeModal').addEventListener('click', function(e) {
    if (e.target === document.getElementById('employeeModal')) {
        document.getElementById('employeeModal').style.display = 'none';
    }
});