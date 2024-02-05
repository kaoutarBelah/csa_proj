import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnseignantService from '../service/EnseignantService';

interface Enseignant {
    NO_ENSEIGNANT: number;
    TYPE: string;
    SEXE: string;
    NOM: string;
    PRENOM: string;
    ADRESSE: string;
    CP: string;
    VILLE: string;
    PAYS: string;
    TEL_PORT: string;
    ENC_PERSO_TEL: string;
    ENC_UBO_TEL: string;
    ENC_PERSO_EMAIL: string;
    ENC_UBO_EMAIL: string;
    INT_NO_INSEE: string;
    INT_SOC_NOM: string;
    INT_SOC_ADRESSE: string;
    INT_SOC_CP: string;
    INT_SOC_VILLE: string;
    INT_SOC_PAYS: string;
    INT_FONCTION: string;
    INT_PROF_EMAIL: string;
    INT_PROF_TEL: string;
}

const ListEnseignantComponent: React.FC = () => {
    const [enseignants, setEnseignants] = useState<Enseignant[]>([]);

    useEffect(() => {
        getAllEnseignants();
    }, []);

    const getAllEnseignants = () => {
        EnseignantService.getAllEnseignants().then((response) => {
            setEnseignants(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteEnseignant = (NO_ENSEIGNANT: number) => {
        EnseignantService.deleteEnseignant(NO_ENSEIGNANT).then((response) => {
            getAllEnseignants();
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container">
        <h2 className="text-center">List Enseignants</h2>
    {/* Add a Link for adding a new enseignant */}
    <Link to="/add-enseignant" className="btn btn-primary mb-2">Add Enseignant</Link>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>No Enseignant</th>
    <th>Type</th>
    <th>Sexe</th>
    <th>Nom</th>
    <th>Prenom</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {
        enseignants.map((enseignant) => (
            <tr key={enseignant.NO_ENSEIGNANT}>
                <td>{enseignant.NO_ENSEIGNANT}</td>
                <td>{enseignant.TYPE}</td>
                <td>{enseignant.SEXE}</td>
                <td>{enseignant.NOM}</td>
                <td>{enseignant.PRENOM}</td>
                <td>
                {/* Add a Link to edit-enseignant */}
                <Link className="btn btn-info" to={`/edit-enseignant/${enseignant.NO_ENSEIGNANT}`}>Update</Link>
    <button
    className="btn btn-danger"
    onClick={() => deleteEnseignant(enseignant.NO_ENSEIGNANT)}
    style={{ marginLeft: "10px" }}
>
    Delete
    </button>
    </td>
    </tr>
))
}
    </tbody>
    </table>
    </div>
);
};

export default ListEnseignantComponent;
