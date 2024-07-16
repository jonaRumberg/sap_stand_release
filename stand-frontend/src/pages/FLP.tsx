
// there must be a better way to handle icons..
import '@ui5/webcomponents-icons/dist/begin.js'
import { FioriLikeCard } from '../components/FioriLikeCard';

const Launchpad = () => {
        return (
                <>
                    <div
                    style={{
                        height: "calc(100vh - 304px)",
                        }}
                    >
                        <FioriLikeCard title='Produktionsplanung' subtitle="Produziere Gummibären" icon="begin"/>
                    </div>
                </>
  )
};

export default Launchpad;
