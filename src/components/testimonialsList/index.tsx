import styles from "./testimonialsList.module.css"

function TestimonialsList(){
    return (
        <div className={styles.innerContent}>
            <div className={styles.testimonials}>
                <div className={styles.testimonial}>
                    <p className={styles.destaque}>"</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Provident eius omnis est alias excepturi velit modi iusto illum, 
                        cupiditate atque qui veniam delectus, eaque earum accusantium totam debitis quidem. 
                        Labore.</p>
                    <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className={styles.people}>Arthur Alcântara</p>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.destaque}>"</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Provident eius omnis est alias excepturi velit modi iusto illum, 
                        cupiditate atque qui veniam delectus, eaque earum accusantium totam debitis quidem. 
                        Labore.</p>
                    <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className={styles.people}>Arthur Alcântara</p>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.destaque}>"</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Provident eius omnis est alias excepturi velit modi iusto illum, 
                        cupiditate atque qui veniam delectus, eaque earum accusantium totam debitis quidem. 
                        Labore.</p>
                    <p className={styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className={styles.people}>Arthur Alcântara</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsList






