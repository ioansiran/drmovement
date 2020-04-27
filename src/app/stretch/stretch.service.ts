import {Injectable} from '@angular/core';
import {Exercise} from './stretch.model';

@Injectable({
  providedIn: 'any'
})
export class StretchService {
  stretches: Exercise[];

  constructor() {
    this.stretches = [
      {
        name: 'Neck Side Flexion',
        imageURL: '/assets/sideneckstretch.png',
        steps: [
          'Sit with good posture',
          'Grasp the end of the bench or the edge of a chair and lean away until your shoulder is depressed. ' +
          'Make sure to maintain an erect posture',
          'Use the opposite hand to gently draw your head away from the anchored shoulder. ',
          'Inhale and gently push your head into your hand for five seconds',
          'Exhale and immediately lean further away, while depressing your shoulder. ' +
          'Then gently move your head and neck further away from your shoulder',
          'Hold the stretch position for five seconds'
        ]
      },
      {
        name: 'Neck Rotation',
        imageURL: '/assets/siderotation.png',
        steps: [
          'Sit with good posture',
          'Rotate your head to one side',
          'Place the opposite hand on your cheek. Inhale ' +
          'and gently rotate your head into your hand while ' +
          'keeping the hand firm. ',
          'Look in the direction that you are turning. ',
          'Hold for five seconds and exhale as you look behind you and rotate your head into the stretch'
        ]
      },
      {
        name: 'Levator Scapulae  ',
        imageURL: '/assets/levatorscapulae.png',
        steps: [
          'Reach one arm as far down between your shoulder blades as possible',
          'Look as far as you comfortably can to the opposite side',
          'Take a deep breath in and hold for five seconds. ' +
          'As you exhale, look downward as far as you comfortably can toward your shoulder. '
        ]
      },
      {
        name: 'Neck Extensors ',
        imageURL: '/assets/neckextensor.png',
        steps: [
          'Maintain an upright posture, either sitting or ' +
          'standing, and let your head drop toward your ' +
          'chest. ',
          'Place one hand on the back of your head and one ' +
          'on your chin',
          'Tuck your chin and gently stretch the back of your ' +
          'neck by drawing your head toward your chest. ,' +
          'Take a deep breath and lightly press your head ' +
          'into your hand, without letting your head move. ',
          'After five seconds, relax as you exhale and gently ' +
          'move your head toward your chest. '
        ]
      },
      {
        name: 'Rhomboids',
        imageURL: '',
        steps: [
          'Kneel in front of a Swiss ball and place your elbow on the ball. ',
          'Bring your arm across your body as it rests on the ball. ',
          // tslint:disable-next-line:max-line-length
          'Inhale and press into the ball with your elbow as you attempt to draw your shoulder blade toward your spine. Use your opposite hand to hold the ball still. ',
          // tslint:disable-next-line:max-line-length
          'Hold for five seconds and release as you exhale and move farther into the stretch, allowing the shoulder blade to move away from your spine. Use your opposite arm to roll the ball across your body'
        ]
      },
      {
        name: 'Scratch Stretch',
        imageURL: '',
        steps: [
          'Stand with good posture, holding a towel behind your back as shown in the picture. ',
          'Use the bottom hand to pull downward until you feel a comfortable stretch. ',
          'Hold that position with your lower arm. ',
          'Inhale as you try to pull upward with your top arm against the fixed resistance of the lower arm. ',
          'Hold that contraction for five seconds. Exhale and pull down with the lower arm to further stretch the upper arm.'
        ]
      },
      {
        name: 'Trunk Rotation ',
        imageURL: '',
        steps: [
          'Lie on your back with your knees bent and pointing up at the ceiling.  ',
          'Your lower legs should be relaxed. Place your ' +
          'hand on your thigh while keeping the other arm ' +
          'stretched out to help you stabilize. ',
          'Slowly let your legs roll to that side until you feel ' +
          'a comfortable stretch in your lower back. Inhale ' +
          'and reduce the support from your arm slightly to ' +
          'activate your trunk muscles. ',
          'Hold for five seconds and repeat to the other side. ' +
          'Continue to practice this stretch until you can ' +
          'comfortably place your thighs on the ground, or ' +
          'until you are no longer improving your range of ' +
          'motion. '
        ]
      },
      {
        name: 'Middle Back and Abdominals ',
        imageURL: '',
        steps: [
          `Caution: If you experience dizziness when looking
up toward the sky (for example, watching an airplane fly by or when putting something away in a
high cupboard), you may also experience dizziness
when performing this stretch. It is very important
that you stop the stretch immediately if you feel any
unusual symptoms. If you do not have sufficient spinal extension (backward bending),
you may compensate by over-extending your neck. This may result in
nausea, dizziness or changes in vision. Any unusual
symptoms indicate the need to see your doctor for
a complete evaluation of your neck to rule out occlusion of the vertebral artery. Should your neck be
cleared as normal, you should have an ear, nose,
throat specialist assess your inner ear function. `,
          'Perform this stretch on a non-slip surface.  ',
          'Sit on a Swiss ball, then walk your legs out and ' +
          'roll backwards until you are lying over the ball. ',
          'Extend your arms over your head. To increase the ' +
          'stretch, slowly straighten your legs. Hold for one ' +
          'minute. '
        ]
      },
      {
        name: 'Obliques',
        imageURL: '',
        steps: [
          'Sit on a Swiss ball and carefully roll down the ball ' +
          'and onto your side',
          'You may use a wall to anchor your feet.  ',
          'Grasp the wrist of your top hand as your arms are ' +
          'extended over your head.',
          'Gently begin rolling the upper body forward and ' +
          'then backward while slightly tugging the upper ' +
          'arm downward. When your feel a tight area, ' +
          'inhale and gently attempt to side bend back up, ' +
          'pulling against your lower arm. You don’t need to ' +
          'actually move, just activate the muscles. ',
          'Relax into a new stretch position as you exhale. '
        ]
      },
      {
        name: 'Squat',
        imageURL: '',
        steps: [
          'Stand with a comfortable stance next to a stable ' +
          'object that you can hang onto. ',
          'Squat down until you are completely relaxed, letting all the tension out of your back and letting ' +
          'your torso rest between, but not supported by, ' +
          'your thighs. ',
          'If you can do this without hanging onto anything, ' +
          'that’s great. If you are too tight in the ankles, ' +
          'knees, butt or low back, you can hold onto a stable ' +
          'object so that you can completely relax. ',
          'Gently rock back and fourth between the balls of ' +
          'the feet and the heels for one minute. '
        ]
      },
      {
        name: 'Lunge',
        imageURL: '',
        steps: [
          ' Assume a lunge position, making sure your front ' +
          'foot stays in front of the knee. ',
          'Draw your belly button in toward your spine and ' +
          'tuck your tail under (this will flatten your low ' +
          'back). (1)',
          'Begin to move your whole pelvis forward, keeping ' +
          'it square to the front. (2) ',
          'To increase the stretch, reach the arm on the trailing leg side over your head and bend your trunk to ' +
          'the side. (3) Rotating your pelvis toward the front ' +
          'leg will also increase the stretch. '
        ]
      },
      {
        name: 'Waiter’s Bow ',
        imageURL: '',
        steps: [
          'Stand with your feet parallel and close together.  ',
          'Keep your legs straight and stick your bottom out ' +
          'until you have an arch in your low back. ',
          'Bend forward from your hips while holding your ' +
          'low back arched until you feel a comfortable ' +
          'stretch on your hamstrings. To help you maintain ' +
          'the correct position, you may tape your back as ' +
          'described on following page. ',
          'Hold for 20 seconds.'
        ]
      },
      {
        name: 'Hamstrings',
        imageURL: '',
        steps: [
          'Lie on your back with a small, rolled-up towel under your back at the belt line level.  ',
          'The towel, when compressed, should be the width ' +
          'and thickness of the fattest part of your hand. ',
          'Grab one leg with both hands, just below the ' +
          'knee, and bring the bent leg up until the thigh is ' +
          'perpendicular to the floor. Extend your toes back ' +
          'toward your shin and slowly straighten your leg ' +
          'without letting the thigh move in your hands or ' +
          'letting your back come off the floor. ',
          'Hold a comfortable stretch for 20 seconds.  '
        ]
      }
    ];
  }

  getAll() {
    return this.stretches;
  }
}
