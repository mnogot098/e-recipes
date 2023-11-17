import React from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { FaUtensilSpoon } from "react-icons/fa";
import "./Meal.scss";

const MealSingle = ({meal}) => {
  console.log(meal);
  let tags = meal?.tags?.split(',');
  console.log(meal);
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <p className='details-title'>Meal Details</p>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src = {meal?.thumbnail} alt = "" className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-orange'>{meal?.title}</h3>
              <div className='py-4'>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{ meal?.category }</span>
                </div>
              </div>
              <div className='ingredients my-5 px-3 py-3'>
                <h6 className='fs-16 text-white'>Ingredients</h6>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, idx) => (
                      <li key = {idx} className = "flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='ingredient text-capitalize fs-15 border'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='measures my-4'>
              <h6 className='fs-16'>Measure:</h6>
              <ul className='grid'>
                {
                  meal?.measures?.map((measure, idx) => (
                    <li key = {idx} className = "fs-14 flex align-end">
                      <span className='li-icon fs-12 text-orange'>
                        <FaUtensilSpoon />
                      </span>
                      <span className='li-text fs-15 fw-6 op-09'>{measure}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='instructions my-4'>
              <h6 className='fs-16'>Instructions:</h6>
              <ul className='grid'>
                {
                  instructions?.map((instruction, idx) => (
                    <li key = {idx} className = "fs-14">
                      <AiOutlineCheckSquare size = {18} className = "text-orange li-icon" />
                      <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle