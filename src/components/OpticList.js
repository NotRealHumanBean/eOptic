import Optic from './Optic';

const OpticList = ({ opticList, searchTerm }) => {
    return (
        <div className="block-row">
            {opticList.map((optic, index) => {
                return (
                    <Optic
                        key={index}
                        opticCompany={optic.optic_company}
                    />
                )
            })}
        </div>
    );

}

export default OpticList;