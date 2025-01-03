function MapComponent() {
  const location = 'New York, NY'; // Or a Google Maps Place ID

  return (
      <iframe
          width="500"
          height="500"
          style={{border: 0}}
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy={'no-referrer-when-downgrade'}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2378.9886494098314!2d-86.36356978319068!3d30.374802699992255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1727637367196!5m2!1sen!2sus"
      />
)
  ;
}

export default MapComponent;