let teacherName = '';  // متغير لتخزين اسم المعلم

// التحقق من البريد الإلكتروني للمعلم عند تسجيل الدخول
document.getElementById('teacherLoginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // الحصول على اسم المعلم والبريد الإلكتروني وكلمة المرور
  const name = document.getElementById('teacher-name').value;
  const email = document.getElementById('teacher-email').value;
  const password = document.getElementById('teacher-password').value;

  // التحقق من أن البريد الإلكتروني يبدأ بالحرف "t"
  if (email.startsWith('t')) {
    // حفظ اسم المعلم
    teacherName = name;

    // إذا كان صحيحًا، توجيه المستخدم إلى الصفحة الرئيسية للمعلم
    window.location.href = 'teacher-home.html';
  } else {
    // إذا كان غير صحيح، عرض رسالة خطأ
    alert('يجب أن يبدأ البريد الإلكتروني الخاص بالمعلم بالحرف "t"');
  }
});

// التحقق من البريد الإلكتروني للطالب عند تسجيل الدخول
document.getElementById('studentLoginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // الحصول على البريد الإلكتروني وكلمة المرور
  const email = document.getElementById('student-email').value;
  const password = document.getElementById('student-password').value;

  // التحقق من أن البريد الإلكتروني يبدأ بالحرف "s"
  if (email.startsWith('s')) {
    // إذا كان صحيحًا، توجيه المستخدم إلى الصفحة الرئيسية للطالب
    window.location.href = 'student-home.html';
  } else {
    // إذا كان غير صحيح، عرض رسالة خطأ
    alert('يجب أن يبدأ البريد الإلكتروني الخاص بالطالب بالحرف "s"');
  }
});

// البحث عن خطة المعلم للطالب
function searchTeacher() {
  const searchName = document.getElementById('teacherSearch').value;

  // عرض خطة المعلم بناءً على الاسم المدخل
  if (searchName.toLowerCase() === teacherName.toLowerCase()) {
    document.getElementById('planContent').innerHTML = `
      <p>الخطة الأسبوعية للمعلم ${teacherName}:</p>
      <ul>
        <li>الأحد: رياضيات</li>
        <li>الاثنين: علوم</li>
        <li>الثلاثاء: فيزياء</li>
        <li>الأربعاء: كيمياء</li>
        <li>الخميس: لغة عربية</li>
      </ul>
    `;
  } else {
    document.getElementById('planContent').innerHTML = `<p>لم يتم العثور على خطة للمعلم ${searchName}</p>`;
  }
}
