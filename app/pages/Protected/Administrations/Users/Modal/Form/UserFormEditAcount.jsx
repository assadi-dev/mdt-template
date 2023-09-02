import React from "react";

import CloseModalBtn from "../../../../../../components/Modal/CloseModalBtn";
import {
  ErrorSection,
  FormContainer,
  HeaderModal,
  ModalContainer,
  ModalFooter,
  SubmitButton,
} from "../../../../../../components/Forms/FormView.styled";
import {
  GridRowHeader,
  ModalEditUserContainer,
  PhotoAgent,
} from "./Form.style";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { user_female, user_male } from "../../../../../../config/constantes";
import { useState } from "react";
import { useEffect } from "react";
import useGradeCategories from "../../../AccesPermissions/hooks/useGradeCategories";
import useGradesListoption from "../../../../../../hooks/useGradesListoption";
import { useCallback } from "react";
import { fetchGradesByFaction } from "../../../../../../hooks/ApiCall";
import { useMemo } from "react";
import SelectAsync from "../../../../../../components/SelectAsync";

const UserFormEditAcount = ({ userData, onCloseModal, ...props }) => {
  const defaultValues = {
    idDiscord: userData.idDiscord,
    fistname: userData.firstname,
    name: userData.name,
    matricule: userData.matricule,
    phone: userData.phone,
    faction: userData.faction,
    grade: userData.grade,
    photo: "",
  };
  const [process, setProcess] = useState();

  const { data, status } = useGradesListoption(userData.faction);

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  console.log(status);

  const promiseGradeoption = () => {
    return new Promise(async (resolve) => {
      let { data } = await fetchGradesByFaction(userData.faction);
      let clean = [...data].map((grade) => ({
        label: grade.name,
        value: grade.id,
      }));
      resolve(clean);
    });
  };

  const gradelistoptions = useMemo(() => {
    if (status == "fullfilled") {
      return [...data].map((grade) => ({
        label: grade.name,
        value: grade.id,
      }));
    }
    return [];
  }, [status]);

  /*     const noPhoto = gender == "male" ? user_male : user_female;
    const style = photo
      ? { backgroundImage: `url(${photo})` }
      : { backgroundImage: `url(${noPhoto})` }; */

  const photoStyle = { backgroundImage: `url(${user_male})` };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <ModalEditUserContainer>
      <ModalContainer {...props}>
        <HeaderModal>
          <h2 className="form-title"> Modifier le compte </h2>
          <CloseModalBtn className="close-section" onClick={onCloseModal} />
        </HeaderModal>
        <FormContainer
          className="form-theme-color"
          onSubmit={handleSubmit(submitForm)}
        >
          <GridRowHeader>
            <div className="grid-a">
              <div className="form-control">
                <label htmlFor="firstname">Prénom</label>

                <input
                  autoFocus
                  type="text"
                  {...register("fistname", { required: true })}
                  placeholder="Son Prénom"
                />
                <ErrorSection>
                  <AnimatePresence>
                    {errors.fistname && (
                      <motion.small className="text-error">
                        Veuillez entrer le prénom
                      </motion.small>
                    )}
                  </AnimatePresence>
                </ErrorSection>
              </div>
              <div className="form-control">
                <label htmlFor="name">Nom</label>

                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Son Nom"
                />
                <ErrorSection>
                  <AnimatePresence>
                    {errors.fistname && (
                      <motion.small className="text-error">
                        Veuillez entrer le prenom
                      </motion.small>
                    )}
                  </AnimatePresence>
                </ErrorSection>
              </div>
            </div>
            <div className="grid-b">
              <PhotoAgent style={photoStyle} />
            </div>
          </GridRowHeader>

          <div className="form-control">
            <label htmlFor="matricule">Matricule</label>

            <input
              type="text"
              {...register("matricule", { required: true })}
              placeholder="Son Matricule"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.fistname && (
                  <motion.small className="text-error">
                    Veuillez entrer le matricule
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </div>

          <div className="form-control">
            <label htmlFor="grade">Grade</label>

            <SelectAsync
              defaultOptions
              options={gradelistoptions}
              isLoading={status == "pending"}
            />

            <ErrorSection>
              <AnimatePresence>
                {errors.grade && (
                  <motion.small className="text-error">
                    Veuillez séléctionnez son grade
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </div>

          <div className="form-control">
            <label htmlFor="idDiscord">ID DISCORD</label>
            <input
              type="text"
              {...register("idDiscord", { required: true })}
              placeholder="ID Discord"
            />
            <ErrorSection>
              <AnimatePresence>
                {errors.idDiscord && (
                  <motion.small className="text-error">
                    Veuillez entrer l'identifiant Discord
                  </motion.small>
                )}
              </AnimatePresence>
            </ErrorSection>
          </div>

          <ModalFooter>
            <SubmitButton className="bg-btn-theme-color" type="submit">
              Mettre à jour
              {process && <SpinnerButton />}
            </SubmitButton>
          </ModalFooter>
        </FormContainer>
      </ModalContainer>
    </ModalEditUserContainer>
  );
};

export default UserFormEditAcount;
