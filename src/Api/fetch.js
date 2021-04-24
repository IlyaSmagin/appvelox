function fetchAppointment() {
  let Appointments = [];
  for (let i = 0; i < 7; i++) {
    Appointments.push({
      title: "Понедельник 15.06.20 | 15:30",
      adress:
        "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит.А",
      docName: "Малушко Т. Н.",
      docProfession: "Хирургия",
    });
  }
  /* console.log(Appointments); */
  return Promise.resolve(Appointments);
}
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
export default fetchAppointment; // Don’t forget to use export default!
