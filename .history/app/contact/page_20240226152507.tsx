import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
  return (
    <section 
     className='mx-auto w-5/6 pt-24 pb-32'
    >
      <div className="md:3/5">
        <h1>
          <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE.
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nulla voluptatum corrupti, explicabo distinctio voluptate fuga repellendus ab quidem porro modi dolorem sed, laboriosam possimus rerum fugit numquam quae placeat?
          Minus veniam fuga explicabo doloremque architecto voluptates quae, temporibus ullam impedit itaque labore animi excepturi et quo provident iure consequatur, soluta repellat dicta quia accusantium! Minus obcaecati saepe cupiditate officia.
          Reiciendis est deleniti, animi cum non, architecto dolorem, repellat numquam fuga nam quia pariatur nisi magni quos cupiditate sunt. A praesentium officiis nobis accusamus maiores possimus officia at reprehenderit accusantium.
          Repellat sint necessitatibus iusto libero eligendi velit natus nisi earum molestias impedit molestiae, distinctio, blanditiis enim voluptatibus amet atque quaerat dolorum sunt illum? A explicabo veniam eaque optio, quaerat cumque.
          Repudiandae voluptatibus alias nulla rem dignissimos nostrum incidunt labore explicabo quasi neque nesciunt amet et dicta eveniet optio, blanditiis animi excepturi qui magnam reprehenderit perferendis quaerat id ex officia. Commodi.
        </p>
      </div>
    </section>
  )
}

export default Contact