const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()


router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET one workout
router.get('/:id', getWorkout)

// POST one workout
router.post('/', createWorkout)

// DELETE one workout
router.delete('/:id', deleteWorkout)

// UPDATE one workout
router.patch('/:id', updateWorkout)



module.exports = router