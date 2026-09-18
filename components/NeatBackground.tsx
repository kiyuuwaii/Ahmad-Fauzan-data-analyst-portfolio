"use client";

import { useEffect, useRef } from "react";

export default function NeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let isDestroyed = false;

    const initGradient = async () => {
      const { NeatGradient } = await import("@firecms/neat");
      
      if (isDestroyed || !canvasRef.current) return;

      const config = {
          colors: [
          { color: '#FFFFFF', enabled: true,},
          { color: '#EFEEFD', enabled: true,},
          { color: '#DCE1E8', enabled: true,},
          { color: '#EBF1F3', enabled: true,},
          { color: '#FFF8FF', enabled: true,},
          ],

          speed: 4,
          horizontalPressure: 4,
          verticalPressure: 5,
          waveFrequencyX: 4,
          waveFrequencyY: 3,
          waveAmplitude: 2,
          secondaryWaveEnabled: false,
          secondaryWaveFrequencyX: 3,
          secondaryWaveFrequencyY: 3,
          secondaryWaveAmplitude: 5,
          secondaryWaveSpeed: 0.6,
          secondaryWaveAngle: 1,
          shadows: 5,
          highlights: 7,
          colorBrightness: 1,
          colorSaturation: -3,
          wireframe: false,
          antialias: false,
          colorBlending: 6,
          backgroundColor: '#00A2FF',
          backgroundAlpha: 1,
          grainScale: 100,
          grainSparsity: 0,
          grainIntensity: 0.05,
          grainSpeed: 0.3,
          resolution: 0.35,
          yOffset: -467,
          yOffsetWaveMultiplier: 5,
          yOffsetColorMultiplier: 4.5,
          yOffsetFlowMultiplier: 5.5,
          flowDistortionA: 0.4,
          flowDistortionB: 3,
          flowScale: 3.3,
          flowEase: 0.53,
          flowEnabled: true,
          enableProceduralTexture: false,
          transparentTextureVoid: false,
          textureMode: 'bitmap',
          bakeEdgeSoftness: 1,
          textureVoidLikelihood: 0.06,
          textureVoidWidthMin: 10,
          textureVoidWidthMax: 500,
          textureBandDensity: 0.8,
          textureColorBlending: 0.06,
          textureSeed: 333,
          textureEase: 0.48,
          proceduralBackgroundColor: '#003FFF',
          textureShapeTriangles: 20,
          textureShapeCircles: 15,
          textureShapeBars: 15,
          textureShapeSquiggles: 10,
          domainWarpEnabled: true,
          domainWarpIntensity: 0,
          domainWarpScale: 0.5,
          vignetteIntensity: 0,
          vignetteRadius: 0.8,
          fresnelEnabled: false,
          fresnelPower: 2,
          fresnelIntensity: 0.5,
          fresnelColor: '#FFFFFF',
          iridescenceEnabled: false,
          iridescenceIntensity: 0.5,
          iridescenceSpeed: 1,
          prismEdgeEnabled: false,
          prismEdgeIntensity: 0.5,
          prismEdgeThinness: 3,
          prismEdgeSpread: 1,
          prismEdgeSpeed: 0.5,
          prismEdgeRipple: 1,
          bloomIntensity: 0,
          bloomThreshold: 0.7,
          chromaticAberration: 0,
          shapeType: 'plane' as any,
          shapeRotationX: 0,
          shapeRotationY: 0,
          shapeRotationZ: 0,
          shapeAutoRotateSpeedX: 0,
          shapeAutoRotateSpeedY: 0,
          sphereRadius: 15,
          torusRadius: 15,
          torusTube: 5,
          cylinderRadius: 10,
          cylinderHeight: 40,
          planeBend: 0,
          planeTwist: 0,
          silhouetteFade: 0.25,
          cylinderFade: 0.08,
          ribbonFade: 0.05,
          flatShading: true,
          cameraLock: true,
          cameraX: 0,
          cameraY: 0,
          cameraZ: 0,
          cameraRotationX: 0,
          cameraRotationY: 0,
          cameraRotationZ: 0,
          cameraZoom: 1,
      };

      gradientRef.current = new NeatGradient({
        ref: canvasRef.current,
        ...config
      });
    };

    initGradient();

    const handleScroll = () => {
      if (gradientRef.current) {
        gradientRef.current.yOffset = window.scrollY; 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      isDestroyed = true;
      window.removeEventListener("scroll", handleScroll);
      if (gradientRef.current) {
        gradientRef.current.destroy();
        gradientRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
      />
    </div>
  );
}
