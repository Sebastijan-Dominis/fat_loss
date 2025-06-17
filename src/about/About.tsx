function About() {
  return (
    <>
      <h1 className="text-center text-lg font-bold xl:text-xl">About</h1>
      <p className="max-w-[70dvw] pt-4 xl:pt-8 xl:text-lg">
        The fat loss journey often takes longer than we plan. This app exists to
        help with that. The fat loss calculator assumes it takes around 7700
        calories to burn through one kilogram of body fat. In reality, it may
        take slightly less than that for obese individuals, and slightly more
        for lean individuals, but 7700 is the average. The calculator also
        assumes that the glycogen has already been depleted. It usually takes
        around 2000 calories to deplete glycogen and water. Lastly, it assumes
        that all of the weight loss comes from fat, and that no new muscle gains
        occur. Therefore, the accuracy of the calculator is not 100%, but it is
        useful nonetheless.
        <br></br>
        <br></br>
        When it comes to estimating one's actual body fat percentage, the only
        near-100% accurate method is the MRI, but getting one for that purpose
        is virtually impossible. DEXA scans are the most accurate available
        method, but they usually cost around 150 euros, and are not available
        everywhere. The U.S. Navy method for calculating body fat is free and
        available to pretty much everyone. The measurements should be taken in
        the morning, after getting sufficient sleep. While measuring the waist,
        one should exhale, but do so naturally, without tucking their stomach
        in. Measurements may fluctuate on a day-to-day basis. The more typical
        one's body fat distribution is, the more accurate the results of this
        method will be. Individuals with odd body shapes will likely not get
        very accurate results. Still, this method is good for its price (free!),
        very simple, fairly accurate for individuals with average body fat
        distributions, and useful for everyone to measure the week-to-week
        changes.
        <br></br>
        <br></br>
        This app does not provide nutritional or medical advice. There are many
        nutritional and medical experts out there to take care of that. This app
        exists so that individuals can roughly estimate how long their fat loss
        journey is going to last, and adjust their target body fat percentage
        and the caloric deficit accordingly.
      </p>
    </>
  );
}

export default About;
