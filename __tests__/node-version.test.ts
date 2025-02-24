describe('Version de Node.js', () => {
  it('devrait utiliser une version de Node.js compatible', () => {
    const nodeVersion = process.versions.node;
    const majorVersion = parseInt(nodeVersion.split('.')[0]);
    
    // React Native 0.78 recommande Node.js 18 ou supérieur
    expect(majorVersion).toBeGreaterThanOrEqual(18);
    
    console.log(`Version de Node.js utilisée : ${nodeVersion}`);
  });
}); 