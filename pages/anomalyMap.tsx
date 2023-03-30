import HeaderOne from '../components/Header/HeaderOne';
import FooterOne from '../components/Footer/FooterOne';
import Loader from '../components/Loader/Loader';
export default function News() {
    return (
        <Loader>
            <HeaderOne type={'white'} />
            <section >
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_nh-sat1_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_euroafr-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_asia-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_ausnz-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_samer-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_pacific-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_npole-sat_t2anom_d1.png'>
                </img>
                <img src='https://climatereanalyzer.org/wx/todays-weather/input/gfs_spole-sat_t2anom_d1.png'>
                </img>
            </section>
            <FooterOne />
        </Loader>
    )
}




