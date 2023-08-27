import teamData from "../../data/team-data.json";
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import TeamMember from './TeamMember';
import styles from './ourTeamTwo.module.css'
const OurTeamTwo = ({ title, tagline }: { title: string, tagline: string }) => (
    <section className="white-bg" id="team" >
        <div className="container" >
            <div className="row">
                <HeadingSection title={title} tagline={tagline} classAppend={undefined} font={undefined} children={undefined} />
            </div>
            <div className={styles.row}>
                {teamData.map((member, i) => (
                    <TeamMember
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        social={member.social}
                        delay={i + 3}
                        removePadding={null}
                    />
                ))}
            </div>
        </div>
    </section>

);

export default OurTeamTwo;
